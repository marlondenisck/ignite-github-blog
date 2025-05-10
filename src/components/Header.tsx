import logo from '../assets/logo.svg'
import leftEffect from '../assets/left-effect.svg'
import rightEffect from '../assets/right-effect.svg'

export function Header() {
  return (
    <header className="bg-profile relative overflow-hidden pt-16 pb-32 pl-0">
      <img className="absolute top-2/5 left-0" src={leftEffect} alt="" />
      <div className="mx-auto my-16 flex max-w-[54rem] items-center justify-center">
        <img className="absolute" src={logo} alt="" />
      </div>
      <img className="absolute top-1/5 right-0" src={rightEffect} alt="" />
      <div className="bg-blue absolute bottom-0 left-[26%] h-[52px] w-4xl shadow blur-[212px]"></div>
    </header>
  )
}
