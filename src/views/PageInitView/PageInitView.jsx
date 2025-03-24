import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";
import { FooterComponent } from "../../components/FooterComponent/FooterComponent";

export function PageInitView() {
  return (
    <div>
      <HeaderComponent />
      <div>
        <Outlet />
      </div>
      <FooterComponent/>
    </div>
  );
}
