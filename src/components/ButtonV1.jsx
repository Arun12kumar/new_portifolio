

const ButtonV1 = ({title,bgcolor,textColour}) => {
  return (
    <button className={`${bgcolor} text-sm lg:text-xl px-4 py-2 rounded-full font-equitan font-semibold cursor-pointer ${textColour} lg:w-40 lg:h-16`}>{title}</button>
  )
}

export default ButtonV1