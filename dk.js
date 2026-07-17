function MyCars() {
  const cars = ["Audi", "Figo", "Hyundai"];
  return (
    <section>
      <h1>Dhinesh HI Welcome 2026</h1>
      <ul>
        {cars.map((car, idx) => (
          <li key={idx}>I am {car}</li>
        ))}
      </ul>
    </section>
  );
}

console.log(cars);
