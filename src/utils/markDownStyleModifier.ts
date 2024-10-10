import showdown from "showdown";

export function markDownStyleModifier(longString: string) {
  const isServer = typeof window === "undefined";

  if (isServer) return null;

  let converter = new showdown.Converter();

  let html: string = converter.makeHtml(longString);

  var wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");
  wrapper.innerHTML = html;

  let style = document.createElement("style");

  style.innerHTML = `
    h1{
      font-size: 32px;
      line-height: 36px;
    }
    h2{
      font-size: 24px;
      line-height: 32px;
    }
    h3{
      font-size: 18px;
      line-height: 28px;
    }
    h4{
      font-size: 16px;
      line-height: 24px;
    }
    h5{
      font-size: 13px;
      line-height: 16px;
    }
    h6{
      font-size: 10px;
      line-height: 14px;
    }
    del{
      font-size: 18px;
    }
    ins,bdi{
      font-size: 24px;
      font-weight: 600;
    }
`;

  wrapper.prepend(style);
  return wrapper.outerHTML;
}

// @media (min-width: 1500px){
//   h1{
//       font-size: 32px;
//       line-height: 1.2;
//   }
// }
