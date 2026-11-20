/**
 * Honeypot — a visually hidden, bot-trap field. Real users never see it;
 * bots that auto-fill every input populate it and the server rejects the
 * submission. aria-hidden so assistive tech ignores it.
 */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="company_website">Website (leave this field empty)</label>
      <input
        id="company_website"
        name="company_website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
