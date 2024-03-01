export default function Tabs({ children, buttons, ButtonesContainer }) {
  // const ButtonContainer = buttonesContainer;

  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
