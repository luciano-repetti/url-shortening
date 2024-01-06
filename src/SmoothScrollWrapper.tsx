import Scroll from './hooks/useScroll'

interface SmoothScrollWrapperProps {
  children: React.ReactNode
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({
  children,
}) => {
  return (
    <main id="my-scrollbar">
      <Scroll />
      {children}
    </main>
  )
}

export default SmoothScrollWrapper
