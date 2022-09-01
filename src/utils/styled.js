export const styled = (tag) => {
  const el = document.createElement(tag);
  return (css) => {
    const styles = css[0];
    return (text = "", attribute = "") => {
      el.innerText = text;
      el.style = styles;
      if (attribute) {
        for (const [key, value] of Object.entries(attribute)) {
          el.setAttribute(key, value);
        }
      }
      return el.outerHTML;
    };
  };
};

// `<${tag} style="${styles}">${text}</${tag}>`
