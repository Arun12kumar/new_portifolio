

const ButtonV2 = ({title,bgcolor,textColour}) => {
  return (
    <button className={`${bgcolor} text-xl px-4 py-2 rounded-full font-equitan font-semibold cursor-pointer ${textColour} w-full h-12`}>{title}</button>
  )
}

export default ButtonV2