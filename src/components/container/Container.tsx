interface Props {
    children: React.ReactNode;
    className?: string
}

export const Container:React.FC<Props> = ({children, className}) => {
    return (
        <div className={['px-16', className].join(' ')}>{children}</div>
    )
}