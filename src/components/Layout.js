// components/Layout.js


import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {children}
      {/* <WhatsAppButton /> */}
  

    </div>
  );
};

export default Layout;
