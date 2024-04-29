export function countDown(time, elem) {
  const timer = setInterval(() => {
    // Auction end
    const end = new Date(time).getTime();
    // Current time
    const now = new Date().getTime();
    const difference = end - now;

    // Calculation for days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    elem.innerText = `Time left: ${days}d, ${hours}h, ${minutes}m, ${seconds}s`;

    if (difference < 0) {
      clearInterval(timer);
      elem.classList.add("text-danger");
      elem.innerText = "This auction has ended";
    }
  });
}
