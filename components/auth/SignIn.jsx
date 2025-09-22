'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { githubAuth, googleAuth } from "@/hooks/auth/sign-in"

export function SignIn({className, ...props}) {
    const navigate = useRouter()
    const params = useSearchParams()
    const ref = params.get('ref')

    const google_auth = async () => {
      try {
        await googleAuth(ref)
        navigate.push('/app')
      } catch (error) {
        console.error('❌ Google Sign-In error:', error.message);
      }
    }
    const github_auth = async () => {
      try {
        await githubAuth(ref)
        navigate.push('/app')
      } catch (error) {
        console.error('❌ Google Sign-In error:', error.message);
      }
    }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
        <button onClick={()=>navigate.back()} className="flex items-center gap-2 hover:bg-muted w-fit p-2 rounded-full transition"><ChevronLeft /> Back</button>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-8 backdrop-blur">
            <h2 className="text-2xl font-bold mb-2">Sign In</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Sign in to your account using one of the providers below.
            </p>
            <div className="grid gap-4 mb-6">
                <Button onClick={()=>google_auth()} variant={'outline'} size={'lg'}>
                    <Image height={100} width={100} src="/google.svg" alt="Google Logo" className="h-5 w-5 mr-2"/>
                    Google
                </Button>
                <Button onClick={()=>github_auth()} variant={'outline'} size={'lg'}>
                    <Image height={100} width={100} src="/github.svg" alt="Google Logo" className="h-5 w-5 mr-2"/>
                    Github
                </Button>
                {/* <Button variant={'outline'}>
                    <Image height={100} width={100} src="/google.svg" alt="Google Logo" className="h-5 w-5 mr-2"/>
                    Meta
                </Button> */}
            </div>
          </div>
          <div className="bg-muted relative hidden md:block">
            <img
              src="https://placehold.co/600x400"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
