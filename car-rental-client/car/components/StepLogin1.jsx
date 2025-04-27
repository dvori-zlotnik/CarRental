import { MyCreditCard } from './CreditCard'
import { LoginLevel1 } from './LogLogin'
import { StepLogin } from './StepLogin'
import { LoginLevel2 } from './LogLogin2'
import { useState } from 'react'
export const StepLogin1 = () => {
    const [step, setStep] = useState(0)
    const [user, setUser] = useState({})
    return <>
        <StepLogin mystep={step}></StepLogin>
        {step == 0 ? <LoginLevel1 user={user} setUser={setUser} setStep={setStep}></LoginLevel1>
            : step == 1 ? <LoginLevel2 user={user} setUser={setUser} setStep={setStep}></LoginLevel2> :
                step == 2 ? <MyCreditCard user={user} setUser={setUser} setStep={setStep}></MyCreditCard> : <></>}
    </>
}