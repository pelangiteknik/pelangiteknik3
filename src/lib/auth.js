import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    session: {
        strategy: "jwt", // Menggunakan JWT untuk session
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET, // Tambahkan secret untuk JWT
    },
    // Callbacks opsional untuk mengontrol token atau session behavior
    callbacks: {
        async signIn({ account, profile }) {
            console.log(account);
            console.log(profile);

            if (!profile?.email) {
                return null
            }
            return true
        },
        async jwt({ token, account, user }) {
            console.log(token);
            console.log(account);

            // Tambahkan informasi user atau account ke dalam JWT jika ada
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            console.log(token);
            console.log(session);

            // Tambahkan akses token dari JWT ke dalam session
            session.accessToken = token.accessToken;
            return session;
        },
    }
}