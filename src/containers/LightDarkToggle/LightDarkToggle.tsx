import { useEffect, useState } from "react"




export default function LightDarkToggle(){
    
    const [isDark, setIsDark] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(()=>{
        if(isDark){
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else{
            document.documentElement.classList.remove("dark")
            localStorage.removeItem("theme")
        }
    }, [isDark])

    const changeLight = () => {
        setIsDark(false);
    }

    const changeDark = () => {
        setIsDark(true);
    }

    return (
        <div className="flex flex-col">
            <span onClick={changeLight} className={`w-[50px] border border-black ${!isDark ? "bg-white": "bg-none"}`}>
                <span/>
                <span>Light</span>
            </span>
            <span onClick={changeDark}>
                <span className={`w-[50px] border border-black ${isDark ? "bg-white": "bg-none"}`} />
                <span>Dark</span>
            </span>
        </div>
    )
}