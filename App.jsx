function App() {
  function hitungSilang() {
    const input = document.getElementById("input4D").value.trim()
    if (!/^\d{4}$/.test(input)) {
      document.getElementById("output").innerText = "Masukkan 4 digit angka!"
      return
    }

    const a = parseInt(input[0])
    const b = parseInt(input[1])
    const c = parseInt(input[2])
    const d = parseInt(input[3])

    const silang1 = (a + c) % 10
    const silang2 = (b + d) % 10
    const silang3 = (a + d) % 10
    const silang4 = (b + c) % 10

    const hasil = `${silang1}${silang2}${silang3}${silang4}`
    document.getElementById("output").innerText = `Hasil Silang: ${hasil}`
  }

  return (
    <div>
      <h1>🔢 Rumus Silang Togel</h1>
      <input id="input4D" maxLength="4" placeholder="Masukkan 4D" />
      <br />
      <button onClick={hitungSilang}>Hitung Silang</button>
      <div id="output"></div>
    </div>
  )
}

export default App
