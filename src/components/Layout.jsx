import Top from "./Top";
export default function Layout({ children }) {
    return (
      <div>
        <Top />
        {children}
      </div>
    );
  }