interface ErrorMessageProps {
    children: React.ReactNode;
}

const ErrorMessage = ({children} : ErrorMessageProps) => {
  return (
    <p className="text-red-500 text-sm mt-2 font-bold">
      {children}
    </p>
  )
}

export default ErrorMessage
