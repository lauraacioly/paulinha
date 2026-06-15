interface PageWrapperProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export default function PageWrapper({ children, title, className = '' }: PageWrapperProps) {
  return (
    <div className={`page-wrapper${className ? ' ' + className : ''}`}>
      {title && <h1 className="page-title">{title}</h1>}
      <div className="page-content">{children}</div>
    </div>
  )
}
