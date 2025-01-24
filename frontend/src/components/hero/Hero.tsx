export const Hero:React.FC = () => {
  return (
    <div className="heroBg flex flex-col items-center justify-center">
      <h1 className="text-8xl drop-shadow-3d " data-text="MENU">
        MENU
      </h1>
      <h3 className="text-2xl max-w-[1200px] mx-12 text-gray-300 ">
        Please take a look at our menu featuring food, drinks, and brunch. If
        you'd like to place an order, use the "Order Online" button located
        below the menu.
      </h3>
    </div>
  );
};
