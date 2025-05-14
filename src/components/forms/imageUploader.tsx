"use client"

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { Loader2, Upload, X } from 'lucide-react'

interface ImageUploaderProps {
    onChange: (urls: string[]) => void
    value: string[]
}

function ImageUploader({ onChange, value }: ImageUploaderProps) {
    const [isUploading, setIsUploading] = useState(false)

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        setIsUploading(true)
        try {
            const uploadPromises = acceptedFiles.map(async (file) => {
                const formData = new FormData()
                formData.append('file', file)
                formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!)

                const response = await fetch(
                    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                    {
                        method: 'POST',
                        body: formData,
                    }
                )

                const data = await response.json()
                return data.secure_url
            })

            const urls = await Promise.all(uploadPromises)
            onChange([...value, ...urls])
        } catch (error) {
            console.error('Error uploading images:', error)
        } finally {
            setIsUploading(false)
        }
    }, [onChange, value])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif']
        },
        multiple: true
    })

    const removeImage = (index: number) => {
        const newUrls = value.filter((_, i) => i !== index)
        onChange(newUrls)
    }

    return (
        <div className="space-y-4">
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
                    ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary'}`}
            >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                    {isDragActive
                        ? "Drop the images here..."
                        : "Drag 'n' drop images here, or click to select files"}
                </p>
            </div>

            {isUploading && (
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Uploading...
                </div>
            )}

            {value.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {value.map((url, index) => (
                        <div key={url} className="relative group">
                            <Image
                                src={url}
                                alt={`Uploaded ${index + 1}`}
                                width={200}
                                height={200}
                                className="rounded-lg object-cover w-full h-32"
                            />
                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ImageUploader