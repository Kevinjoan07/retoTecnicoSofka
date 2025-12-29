import { test, expect } from "@playwright/test";


test("crear orden de compra", async ({ request }) => {
  const orderData = {
    "id": 55,
    "petId": 8723,
    "quantity": 7,
    "shipDate": "1948-11-26T10:47:57.285Z",
    "status": "placed",
    "complete": true,
  };
  const response = await request.post(
    "https://petstore.swagger.io/v2/store/order", { data: orderData, });

  expect(response.status()).toBe(200);
});


test("consultar orden de compra", async ({ request }) => {
  const response = await request.get("https://petstore.swagger.io/v2/store/order/55");
  expect(response.status()).toBe(200);
});




test("consultar inventario de ordenes", async ({ request }) => {
  const response = await request.get(
    "https://petstore.swagger.io/v2/store/inventory"
  );
  expect(response.status()).toBe(200);
});




test("Eliminar orden de compra", async ({ request }) => {
  const response = await request.delete(
    "https://petstore.swagger.io/v2/store/order/55"
  );
  expect(response.status()).toBe(200);
});



test("consultar orden de compra eliminada", async ({ request }) => {
  const response = await request.get(
    "https://petstore.swagger.io/v2/store/order/55"
  );
  expect(response.status()).toBe(404);
});