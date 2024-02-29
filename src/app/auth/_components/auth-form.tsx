'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { useForm } from "react-hook-form"

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center space-y-4">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-sm text-neutral-muted">Enter your email to sign in or create an account</p>
      </div>
      <Card className="w-full max-w-sm">
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" {...form.register('email')} />
          </div>
          <Button className="w-full">Send Magic Link</Button>
        </CardContent>
      </Card>
    </div>
    </form>
  )
}

