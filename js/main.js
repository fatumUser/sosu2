document.getElementById("mobile-header").classList.add("el-hidden");

document.querySelectorAll('.block-burger').forEach(el => 
    el.addEventListener('click', () =>
        document.getElementById("mobile-header").classList.remove("el-hidden")
    )
  );

  