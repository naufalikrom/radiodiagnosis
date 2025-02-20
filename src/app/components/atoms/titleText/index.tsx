import { cn } from '@/app/utils/utils'
import React from 'react'

const TitleText = ({ className, children }: any) => {
    return (
        <div>
            <p className={cn(
                ' text-white',
                className
            )}>
                {children}
            </p>
        </div>
    )
}

export default TitleText
