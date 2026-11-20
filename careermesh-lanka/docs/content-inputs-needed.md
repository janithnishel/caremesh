# Content Inputs Needed (owner-only)

This lists everything only the CareerMesh owner can supply. The site is
built to display these the moment they are provided, and uses empty states
or clearly-labelled demo content until then. Nothing below should be
invented.

## Contact details (`src/config/site.ts`)
- [ ] Email address
- [ ] Phone number
- [ ] Physical / postal address
- [ ] WhatsApp number (if applicable)

## Social links (`src/config/site.ts`)
- [ ] LinkedIn, Facebook, Instagram, X, YouTube URLs

## Partners
- [ ] Approved university / education provider names + logos
- [ ] Approved employer / company names + logos
- [ ] Approved graduate recruiter / corporate partner names

## Testimonials & success stories
- [ ] Approved student testimonials (name, role, quote, consent)
- [ ] Approved education partner testimonials
- [ ] Approved employer testimonials
- [ ] Success stories with verified outcomes only

## Case studies
- [ ] Education case studies (institution background, challenge, strategy,
      implementation, verified outcomes, partner feedback)
- [ ] Employer case studies
- [ ] Graduate recruitment case studies

## Team (`src/data/content.ts`)
- [ ] Real team member names, titles and biographies
- [ ] Team photos (optional)

## Programs & pricing
- [ ] Final program fees (`src/data/pricing.ts`)
- [ ] Program durations (`src/data/students.ts` — program structure steps)
- [ ] Entry requirements (final, management-approved)
- [ ] Recruitment pricing (placement fee, project fee, monthly support,
      custom agreements)
- [ ] ClientFlow package pricing (Starter, Professional, Business, Enterprise)

## Resources
- [ ] Real article content (replace demo `isDemo: true` articles in
      `src/data/content.ts`)
- [ ] Author information for articles

## Legal
- [ ] Professional legal review of Privacy Policy, Terms, Cookie Policy
- [ ] Review against applicable Sri Lankan data protection requirements
- [ ] Final contact email/phone for legal notices

## ClientFlow CRM integration
- [ ] Official ClientFlow logo / brand asset (do not imitate)
- [ ] `CLIENTFLOW_WEBHOOK_URL` (server env var)
- [ ] `CLIENTFLOW_API_KEY` (server env var)
- [ ] Field mapping confirmation per pipeline

## Analytics
- [ ] Analytics provider choice + ID (no tracking ships until consent and
      until an ID is supplied)

## Photography
- [ ] Real Sri Lankan educational / business photography per
      `docs/image-brief.md`
