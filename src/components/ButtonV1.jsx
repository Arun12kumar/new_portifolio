

const ButtonV1 = ({title,bgcolor,textColour}) => {
  return (
    <button className={`${bgcolor} text-lg px-4 py-2 rounded-full font-equitan font-semibold cursor-pointer ${textColour}`}>{title}</button>
  )
}

export default ButtonV1