// trigger to play music in the background with sweetalert
  window.addEventListener('load', () => {
    Swal.fire({
      title: 'Do you want to play music in the background?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        document.querySelector('.song').play();
        resolveFetch().then(animationTimeline());
      } else {
        resolveFetch().then(animationTimeline());
      }
    });
  });


  // animation timeline
  const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementById("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
      .split("")
      .join("</span><span>")}</span`;

    hbd.innerHTML = `<span>${hbd.innerHTML
      .split("")
      .join("</span><span>")}</span`;

    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg"
    }

    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
      visibility: "visible"
    })
      .from(".one", 0.7, {
        opacity: 0,
        y: 10
      })
      .from(".two", 0.4, {
        opacity: 0,
        y: 10
      })
      .to(".one",
        0.7,
        {
          opacity: 0,
          y: 10
        },
      "+=3.5")
      .to(".two",
        0.7,
        {
          opacity: 0,
          y: 10
        },
      "-=1")
      .from(".three", 0.7, {
        opacity: 0,
        y: 10
      })
      .to(".three",
        0.7,
        {
          opacity: 0,
          y: 10
        },
      "+=3")
      .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
      })
      .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
      })
      .staggerTo(
        ".hbd-chatbox span",
        1.5, {
          visibility: "visible",
        },
        0.05
      )
      .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
      },
      "+=4")
      .to(
        ".four",
        0.5, {
          scale: 0.2,
          opacity: 0,
          y: -150
        },
      "+=1")
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-3", 0.7, ideaTextTrans)
      .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
      })
      .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-4", 0.7, ideaTextTrans)
      .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
      .from(
        ".idea-5",
        0.7, {
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0,
        },
        "+=1.5"
      )
      .to(
        ".idea-5 span",
        0.7, {
          rotation: 90,
          x: 8,
        },
        "+=1.4"
      )
      .to(
        ".idea-5",
        0.7, {
          scale: 0.2,
          opacity: 0,
        },
        "+=2"
      )
      .staggerFrom(
        ".idea-6 span",
        0.8, {
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: Expo.easeOut,
        },
        0.2
      )
      .staggerTo(
        ".idea-6 span",
        0.8, {
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
      )
      .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
      .to(
        ".last-smile",
        0.5, {
          rotation: 90,
        },
        "+=1"
      );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
      tl.restart();
    });
  }

  // Import the data to customize and insert them into page
  // const fetchData = () => {
  //   fetch("customize.json")
  //     .then(data => data.json())
  //     .then(data => {
  //       Object.keys(data).map(customData => {
  //         if (data[customData] !== "") {
  //           if (customData === "imagePath") {
  //             document
  //               .getElementById(customData)
  //               .setAttribute("src", data[customData]);
  //           } else {
  //             document.getElementById(customData).innerText = data[customData];
  //           }
  //         }
  //       });
  //     });
  // };

  // Run fetch and animation in sequence
  const resolveFetch = () => {
    return new Promise((resolve, reject) => {
      // fetchData();
      resolve("Fetch done!");
    });
  };