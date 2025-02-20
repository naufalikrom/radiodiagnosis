import React from 'react'
import { Button } from '../../atoms/button'
import { Input } from "../../atoms/input"
import { Label } from "../../atoms/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../../atoms/card'
import { Textarea } from '../../atoms/textarea'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../../molecules/alert'

const Sends = () => {
    return (
        <div className='pt-16'>
            <div className="bg-gradient-to-br from-[#000040] to-black p-6 rounded-3xl shadow-lg">
                <div className='flex flex-col md:flex-row'>
                    <Card className="md:w-3/4 w-full bg-white shadow-md rounded-xl">
                        <CardHeader>
                            <CardTitle className='text-3xl'>Send a Message</CardTitle>
                            <CardDescription>Send me a message with any problems or suggestions.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Name" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="email@gmail.com" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="note">Notes</Label>
                                        <Textarea placeholder="Type your message here." />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button>Submit</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className='text-black'>Announcement</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Sorry, the feature is not available yet
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Back</AlertDialogCancel>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </CardFooter>
                    </Card>
                    <Card className="md:w-1/4 w-full md:ml-1 mt-2 md:mt-0 bg-white shadow-md rounded-xl">
                        <CardHeader>
                            <CardTitle className='text-center text-3xl'>Special Thanks</CardTitle>
                            <p className="text-sm">
                                Kami mengucapkan terima kasih yang sebesar-besarnya kepada <strong>Anda</strong>, para pengguna yang telah mempercayai dan menggunakan sistem ini.
                            </p>
                            <ul className="mt-4 text-left space-y-3 text-sm">
                                <li>✅ <strong>Kepercayaan Anda</strong> dalam menggunakan sistem kami untuk mendeteksi kelainan gigi.</li>
                                <li>✅ <strong>Masukan & Saran</strong> yang sangat berharga untuk meningkatkan kualitas layanan kami.</li>
                                <li>✅ <strong>Dukungan & Antusiasme</strong> yang menjadi motivasi kami untuk terus berkembang.</li>
                            </ul>
                            <p className="mt-6 text-sm font-semibold">
                                Terima kasih telah menjadi bagian dari perjalanan ini! 💙
                            </p>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Sends
