const users = require("../models/userSchema");
const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");

//email config
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

exports.userregister = async (req, res) => {
    const { fname, email, password } = req.body;

    if (!fname || !email || !password) {
        res.status(400).json({ error: "Please Enter All Input Data" })
    }

    try {
        const presuer = await users.findOne({ email: email });

        if (presuer) {
            res.status(400).json({ error: "This User Allready exist in our db" })
        } else {
            const userregister = new users({
                fname, email, password
            });

            // here password hasing

            const storeData = await userregister.save();
            res.status(200).json(storeData);
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
    }

};


exports.userOtpSend = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: "Please Enter Your Email" });
    }

    try {
        const presuer = await userotp.findOne({ email: email });


        if (presuer) {

            const OTP = Math.floor(100000 + Math.random() * 900000);

            const exitEmail = await userotp.findOne({ email: email });

            if (exitEmail) {
                const updateData = await userotp.findByIdAndUpdate({ _id: exitEmail._id }, {
                    otp: OTP
                }, { new: true }
                );

                await updateData.save();

                const mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Sending Email For Otp Validation",
                    text: `otp:- ${OTP}`
                }

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({ error: "Email Not Send" })
                    } else {
                        console.log("Email sent ", info.response)
                        res.status(200).json({ message: "Email sent successfully" })
                    }
                })

            } else {
                const saveOtpData = new userotp({
                    email, otp: OTP
                });
                await saveOtpData.save();
                const mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Sending Email For Otp Validation",
                    text: `otp:- ${OTP}`
                }

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({ error: "Email Not Send" })
                    } else {
                        console.log("Email sent ", info.response)
                        res.status(200).json({ message: "Email sent successfully" })
                    }
                })
            }
        } else {
            res.status(400).json({ error: "This User Not Exit in Our db" });
        }

    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });

    }
}