/**
 * ArrowButton — simple rounded pill button
 * Props:
 *   title    – button label
 *   href     – renders as <a> when provided
 *   download – boolean, passed to <a download>
 *   onClick  – click handler when rendered as <button>
 *   bg       – Tailwind bg class  (default: "bg-primary")
 *   text     – Tailwind text class (default: "text-white")
 */
const ArrowButton = ({
  title,
  href,
  onClick,
  download,
  bg = 'bg-primary',
  text = 'text-white',
}) => {
  const cls = `xs:text-2xl px-2 xs:px-3 xs:py-2 rounded-full font-equitan font-semibold cursor-pointer ${bg} ${text} w-32 xs:w-52 h-12 xs:h-16 flex flex-row items-center justify-center`

  if (href) {
    return (
      <a href={href} download={download} className={cls}>
        <p>{title}</p>
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cls}>
      <p>{title}</p>
    </button>
  )
}

export default ArrowButton
