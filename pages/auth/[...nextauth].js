import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
        name : "Credentials",
        async authorize(credentials, req){
            

            // check user existance
            const result = await Users.findOne( { email : credentials.email})
            if(!result){
                throw new Error("No user Found with Email Please Sign Up...!")
            }

            // compare()
            const checkPassword = await compare(credentials.password, result.password);
            
            // incorrect password
            if(!checkPassword || result.email !== credentials.email){
                throw new Error("Username or Password doesn't match");
            }

            return result;

        }
    })
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)