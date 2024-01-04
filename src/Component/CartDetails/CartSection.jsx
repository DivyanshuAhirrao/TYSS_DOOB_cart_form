import React from "react";
import "../cartnav.css";
import Links from "./Links";
import CartForm from "./CartForm";
import SubmitButtonArea from "./SubmitButtonArea";

const CartSection = () => {
  return (
    <>
      <section id="card-section-main">
        <section id="cart-info">
          <main className="form-box">
            <Links />
            <CartForm />
            <SubmitButtonArea />
          </main>
          <main className="summary-box">
            <main className="summary-internal-box">
            <article className="summary-main">
              <div className="summary-title">Order-Summary</div>
              <div className="cart-items cart-summary-text">
                <aside className="summary-side-1">Doob-Buisness</aside>
                <aside className="summary-side-2">$14.00</aside>
              </div>
              <div className="cart-handlingfee cart-summary-text">
                <aside className="summary-side-1">Handling Fee </aside>
                <aside className="summary-side-2">$0.00</aside>
              </div>
              <div className="cart-total-price cart-summary-text">
                <aside className="summary-side-1 cart-total-text">Total</aside>
                <aside className="summary-side-2 cart-total-price"> US$ 14.00</aside>
              </div>
            </article>
            </main>
          </main>
        </section>
      </section>
    </>
  );
};

export default CartSection;
