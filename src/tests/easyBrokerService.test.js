const EasyBrokerService = require("../easyBrokerService");

describe('easy broker service', () => {
    test("get properties titles", async () => {
      const titles = [
        'Casa con uso de suelo prueba',
        'afsdf',
        'Locales en Venta Edificio Roble en San Pedro Garza Garcia',
        'Locales en Venta Amadeus Calzada del Valle',
        'Locales Comerciales en Venta Vasconcelos San Pedro Garza Garcia',
        'Local en Renta Plaza Villas Valle San Pedro Garza Garcia',
        'Departamento en Renta Torre Arcangeles en San Pedro Garza Garcia',
        'Oficinas en Venta en Valle Oriente',
        'Casa en Renta en Lomas del Valle en San Pedro Garza Garcia',
        'Departamentos Amueblados en Renta Valle Oriente',
        'Oficinas en Renta en Torre Altha San Pedro Garza Garcia',
        'Oficina en Venta Centrito 360 San Pedro Garza Garcia',
        'Oficinas en Renta en Colonia del Valle San Pedro Garza Garcia',
        'Local en Venta Centrito 360 San Pedro Garza Garcia',
        'Departamento Amueblado en Renta Valle San Pedro Garza Garcia',
        'Casa en Renta en Privanzas San Pedro Garza Garcia',
        'Local Comercial en Renta en Plaza Cen 333 San Pedro',
        'Departamento Amueblado en Renta Torre Koi Valle Pedro Garza Garcia',
        'Local en Renta Plaza Maranta San Pedro Garza Garcia',
        'Local Renta Valle'
      ];
      const easyBrokerService = new EasyBrokerService();
      const result = await easyBrokerService.getProperties();
      expect(result.length).toBe(20);
      expect(result).toEqual(titles);
    });
})
