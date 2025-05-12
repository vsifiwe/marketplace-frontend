import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface IconInputProps extends React.ComponentProps<"input"> {
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  className?: string
}

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

const IconInput = React.forwardRef<HTMLInputElement, IconInputProps>(
  ({ className, leftIcon: LeftIcon, rightIcon: RightIcon, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {LeftIcon && (
          <div className="absolute left-3 flex items-center pointer-events-none">
            <LeftIcon className="h-4 w-4 text-[#C1CF16]" />
          </div>
        )}
        <Input
          ref={ref}
          className={cn(
            LeftIcon && "pl-9",
            RightIcon && "pr-9",
            className
          )}
          {...props}
        />
        {RightIcon && (
          <div className="absolute right-3 flex items-center pointer-events-none">
            <RightIcon className="h-4 w-4 text-[#C1CF16]" />
          </div>
        )}
      </div>
    )
  }
)
IconInput.displayName = "IconInput"

export { Input, IconInput }
