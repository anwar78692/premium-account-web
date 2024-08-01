// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
//   pages: {
//     signIn: '/auth/signin',  // Custom sign-in page if needed
//   },
  callbacks: {
    async jwt({ token, user }) {
        // On sign in, add user data to token
        if (user) {
          token.id = user.id;
          token.email = user.email;
          token.name = user.name;
          token.image = user.image;
        }
        return token;
    },
    async session({ session, token }) {
        // Add user data to session object
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.image;
        return session;
      },
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET, // Optional, used to encrypt cookies
});
