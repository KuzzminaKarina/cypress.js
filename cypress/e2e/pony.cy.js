describe('Тестирование HuntingPony', function () {
   it('Проверка, что при поиске теслы в выдаче есть тесла', function () {
      cy.visit('https://huntingpony.com/');
      cy.get('#splide02-slide02 > .product-preview > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
      cy.wait(1000);
      cy.get('.add-cart-counter__btn').click();
      cy.wait(1000);
      cy.get('[data-add-cart-counter-plus=""]').click();
      cy.get('.header__cart > .icon').click();
      cy.wait(2000);
      cy.get('.cart-controls > .button').click();
      cy.contains('Оформление заказа').should('be.visible');
    })
})