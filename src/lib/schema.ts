import z from "zod";

const schema = z.object({
  username: z
    .string()
    .min(3, "username is required and atleast 3 chars")
    .max(21, "username i must be atmost 21 chars"),
  email: z.email({ error: "Email is required" }),
  password: z.string().min(8, "Password must be atleast 8 chars"),
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(3),
  phone: z.int().min(10).max(12),
  address: z.string(),
  birthDay: z.date(),
  sex: z.enum(["male", "female"], "Gender is required"),
 bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  img: z.instanceof(File, { message: "Image is Required" }),
});

export default schema