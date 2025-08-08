
// Solardienst App – Kunden- & Adminportal
// Aktueller Stand: Zwei Bereiche (Unternehmen / Privatkunden), Anfrageformular, Projektstatusanzeige, interner Adminbereich

import { useState } from "react";

export default function App() {
  const [view, setView] = useState("home");

  if (view === "form") return <FormView onBack={() => setView("home")} />;
  if (view === "status") return <StatusView onBack={() => setView("home")} />;
  if (view === "admin") return <AdminView onBack={() => setView("home")} />;

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <header className="text-center text-2xl font-bold mb-6">
        Solardienst – Kunden & Projektportal
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Für Unternehmen</h2>
          <p className="text-sm mb-4">Planung, Projektbegleitung, Montage – direkt beauftragbar inkl. Statusverfolgung.</p>
          <button onClick={() => setView("form")} className="bg-white text-black rounded-xl px-4 py-2 font-medium">Jetzt anfragen</button>
        </div>

        <div className="bg-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Für Privatkunden</h2>
          <p className="text-sm mb-4">Beratung & Vermittlung passender Partner inkl. Angebotsvergleich.</p>
          <button onClick={() => setView("form")} className="bg-white text-black rounded-xl px-4 py-2 font-medium">Jetzt anfragen</button>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <button onClick={() => setView("status")} className="text-sm underline">Projektstatus ansehen</button>
        <button onClick={() => setView("admin")} className="text-sm underline">Interner Adminbereich</button>
      </div>
    </div>
  );
}

function FormView({ onBack }) {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Anfrageformular</h2>
      <p className="text-sm mb-6">Teilen Sie uns mit, welche Dienstleistung Sie benötigen. Wir melden uns schnellstmöglich.</p>

      <form className="grid gap-4 max-w-xl">
        <input className="bg-white/10 rounded-xl px-4 py-2" placeholder="Name / Firma" />
        <input className="bg-white/10 rounded-xl px-4 py-2" placeholder="E-Mail-Adresse" />
        <input className="bg-white/10 rounded-xl px-4 py-2" placeholder="Telefonnummer (optional)" />
        <select className="bg-white/10 rounded-xl px-4 py-2">
          <option>Ich bin ...</option>
          <option>Unternehmen</option>
          <option>Privatkunde</option>
        </select>
        <select className="bg-white/10 rounded-xl px-4 py-2">
          <option>Gewünschte Dienstleistung</option>
          <option>PV-Planung</option>
          <option>Projektbegleitung</option>
          <option>Montage durch Partner</option>
          <option>Beratung</option>
        </select>
        <textarea className="bg-white/10 rounded-xl px-4 py-2" rows={4} placeholder="Weitere Details / Wünsche" />
        <input className="bg-white/10 rounded-xl px-4 py-2" placeholder="Wunsch-Fertigstellung (optional)" />
        <button type="submit" className="bg-white text-black rounded-xl px-4 py-2 font-medium">Anfrage absenden</button>
      </form>

      <div className="mt-6">
        <button onClick={onBack} className="text-sm underline">Zurück</button>
      </div>
    </div>
  );
}

function StatusView({ onBack }) {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Projektstatus prüfen</h2>
      <input className="bg-white/10 rounded-xl px-4 py-2 mb-4" placeholder="Anfragenummer (z. B. SD-12345)" />
      <button className="bg-white text-black rounded-xl px-4 py-2 font-medium">Status anzeigen</button>

      <div className="mt-6">
        <button onClick={onBack} className="text-sm underline">Zurück</button>
      </div>
    </div>
  );
}

function AdminView({ onBack }) {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Adminbereich (intern)</h2>
      <p className="text-sm mb-4">Hier können Anfragen verwaltet, Projekte eingesehen und interne Dokumente abgelegt werden.</p>
      <ul className="list-disc pl-6 text-sm space-y-1">
        <li>Kundenübersicht</li>
        <li>Projektübersicht & Status</li>
        <li>Interne Notizen & Dateien</li>
        <li>To-Dos & Zwischenspeicherung</li>
      </ul>

      <div className="mt-6">
        <button onClick={onBack} className="text-sm underline">Zurück</button>
      </div>
    </div>
  );
}
