import Message from "@components/Message";
import Nav from "@components/Nav";
import "@styles/globals.css"


export const metadata = {
    title: "AG Dental Clinic",
    description: "A smile that last"
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>    
            <main className="website">
                <Nav/>
                {children}
                <Message/>
            </main>
        </body>
    </html>
  );
};

export default RootLayout;
