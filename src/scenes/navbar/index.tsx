
import Logo from "@/assets/images/logo.svg";
import useMediaQuery from "@/hooks/useMediaQuery";
import StyledButton from "@/shared/StyledButton";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Navbar = () => {
  const flexbetween = "flex items-center justify-between"
  const isAboveMediumScreen = useMediaQuery("(min-width:740px)")
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  return (
    <nav>
      <div className={`${flexbetween} w-full py-8`}>
        <div className={`${flexbetween} mx-auto w-5/6 gap-8`}>
          <img alt="Shortly Logo" src={Logo} />
          {isAboveMediumScreen ? (<div className={`${flexbetween} w-full`}>
            <div className={`${flexbetween} gap-8`}>
              <StyledButton>Features</StyledButton>
              <StyledButton>Pricing</StyledButton>
              <StyledButton>Resources</StyledButton>

            </div>
            <div className={`${flexbetween} gap-8`}>
              <StyledButton>Login</StyledButton>
              <p className="mx-auto bg-primary-100 rounded-2xl text-[14px] text-white py-1 px-4 hover:cursor-pointer ">Sign up</p>
            </div>
          </div>
          ) : (
            <Bars3Icon className="h-8 w-8 hover:cursor-pointer" onClick={() => setIsMenuToggled((e) => !e)} />
          )}

          {!isAboveMediumScreen && isMenuToggled && (
            <div className="fixed z-20 w-[300px] top-20  drop-shadow-xl bg-primary-200 text-white left-1/2 transform -translate-x-1/2 text-center rounded-md">
              <div className="flex-col items-center justify-center">
                <p className="hover:cursor-pointer p-4"> Features</p>
                <p className="hover:cursor-pointer p-4"> Pricing</p>
                <p className="hover:cursor-pointer p-4"> Resources</p>
                <hr className="my-4 border-grayish-voilet w-[80%] mx-auto " />
                <p className="hover:cursor-pointer p-4"> Login</p>
                <button className="mx-auto bg-primary-100 rounded-2xl text-[14px] w-[260px] text-white py-2 px-3 hover:cursor-pointer mb-4">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav >
  )
}

export default Navbar