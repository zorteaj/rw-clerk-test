import { SignIn as ClerkSignIn } from '@clerk/clerk-react'

import { MetaTags } from '@redwoodjs/web'

const SignIn = () => {
  return (
    <>
      <MetaTags title="Sign In" description="SignIn page" />
      <div className="flex justify-content-center auth-container">
        <ClerkSignIn signUpUrl="/sign-up" />
      </div>
    </>
  )
}

export default SignIn
