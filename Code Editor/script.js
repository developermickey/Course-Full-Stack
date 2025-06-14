let editor;

require.config({
  paths: {
    vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs",
  },
});

require(["vs/editor/editor.main"], function () {
  editor = monaco.editor.create(document.getElementById("editor"), {
    value: 'print("Hello, World!")',
    language: "python",
    theme: "vs-dark",
    fontSize: 14,
    automaticLayout: true,
  });

  document.getElementById("language").addEventListener("change", function () {
    const ext = this.options[this.selectedIndex].getAttribute("data-ext");
    const samples = {
      python: 'print("Hello, World!")',
      javascript: 'console.log("Hello, World!");',
      java: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
      cpp: '#include <iostream>\nint main() {\n  std::cout << "Hello, World!";\n  return 0;\n}',
    };
    monaco.editor.setModelLanguage(editor.getModel(), ext);
    editor.setValue(samples[ext]);
  });
});

document.getElementById("runCode").addEventListener("click", async () => {
  const code = editor.getValue();
  const langId = document.getElementById("language").value;
  const input = document.getElementById("input").value;
  const expected = document.getElementById("expected").value.trim();

  document.getElementById("output").textContent = "⏳ Running code...";
  document.getElementById("verdict").textContent = "";

  try {
    const res = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
        body: JSON.stringify({
          source_code: code,
          language_id: parseInt(langId),
          stdin: input,
        }),
      }
    );

    const data = await res.json();
    const output =
      data.stdout || data.stderr || data.compile_output || "No output";
    document.getElementById("output").textContent = output;

    if (expected) {
      const verdict = output.trim() === expected ? "✅ Passed" : "❌ Failed";
      document.getElementById("verdict").textContent = verdict;
      document.getElementById("verdict").style.color =
        verdict === "✅ Passed" ? "lightgreen" : "tomato";
    }
  } catch (err) {
    document.getElementById("output").textContent = "⚠️ Error: " + err.message;
  }
});
