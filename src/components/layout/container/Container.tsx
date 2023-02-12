const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Container;
