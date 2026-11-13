const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/EFGH/.gemini/antigravity/brain/b0bb4202-ed49-4e0d-971c-d9a886264eee/.user_uploaded';
const outDir = 'apps/frontend/public/projects/votely';
const assetsDir = 'apps/frontend/src/assets';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  console.log('1. Processing individual screenshots...');
  // 1. Organizer Dashboard
  await sharp(path.join(srcDir, 'media_1794554425939_28dd4ee1.jpg'))
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'organizer-dashboard.jpg'));

  // 2. Admin Oversight
  await sharp(path.join(srcDir, 'media_1794554421403_9e4b69bf.jpg'))
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'admin-oversight.jpg'));

  // 3. Public Voting
  await sharp(path.join(srcDir, 'media_1794554474385_46351ca1.jpg'))
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'public-voting.jpg'));

  // 4. Phone Verification Modal
  await sharp(path.join(srcDir, 'media_1794554479394_496eeb8b.jpg'))
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'phone-verification-modal.jpg'));

  // 5. OTP Modal
  await sharp(path.join(srcDir, 'media_1794554481634_c2348d8f.jpg'))
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'otp-modal.jpg'));

  // 6. Vote Success Modal
  await sharp(path.join(srcDir, 'media_1794554489001_4225e001.png'))
    .png({ quality: 95 })
    .toFile(path.join(outDir, 'vote-success-modal.png'));

  // 7. AfroMessage SMS - Redact the verification codes with a clean privacy block
  const smsMeta = await sharp(path.join(srcDir, 'media_1794554486595_f62c52c7.jpg')).metadata();
  const redactSvg = Buffer.from(
    '<svg width="' + smsMeta.width + '" height="' + smsMeta.height + '">' +
    '  <rect x="195" y="433" width="75" height="24" rx="4" fill="#0f172a" />' +
    '  <text x="200" y="450" font-family="monospace" font-size="14" font-weight="bold" fill="#38bdf8">••••••</text>' +
    '  <rect x="195" y="733" width="75" height="24" rx="4" fill="#0f172a" />' +
    '  <text x="200" y="750" font-family="monospace" font-size="14" font-weight="bold" fill="#38bdf8">••••••</text>' +
    '</svg>'
  );
  await sharp(path.join(srcDir, 'media_1794554486595_f62c52c7.jpg'))
    .composite([{ input: redactSvg, top: 0, left: 0 }])
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'afromessage-sms.jpg'));

  console.log('2. Generating composite flagship cover (1200x675)...');
  // Canvas: 1200 x 675
  // We composite:
  // - Dark gradient background with indigo/violet ambient glow
  // - Base card: Organizer Dashboard resized to 820x403, positioned top: 90, left: 60 with drop shadow
  // - Foreground card: Vote Success Modal / Public Voting Nominee detail resized to 380x485, positioned top: 120, right/left: 760 with drop shadow
  
  // Background SVG
  const bgSvg = Buffer.from(`
    <svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ambientGlow" cx="50%" cy="20%" r="65%">
          <stop offset="0%" stop-color="#4F46E5" stop-opacity="0.28" />
          <stop offset="45%" stop-color="#7C3AED" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#05060D" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="topGlow" cx="20%" cy="30%" r="50%">
          <stop offset="0%" stop-color="#6366F1" stop-opacity="0.20" />
          <stop offset="100%" stop-color="#05060D" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0B0C16" />
          <stop offset="60%" stop-color="#07080E" />
          <stop offset="100%" stop-color="#040408" />
        </linearGradient>
      </defs>
      <rect width="1200" height="675" fill="url(#bgGrad)" />
      <rect width="1200" height="675" fill="url(#ambientGlow)" />
      <circle cx="240" cy="180" r="320" fill="url(#topGlow)" />
      
      <!-- Subtle Tech Grid Lines -->
      <g stroke="rgba(255, 255, 255, 0.03)" stroke-width="1">
        <line x1="0" y1="75" x2="1200" y2="75" />
        <line x1="0" y1="600" x2="1200" y2="600" />
        <line x1="60" y1="0" x2="60" y2="675" />
        <line x1="1140" y1="0" x2="1140" y2="675" />
      </g>

      <!-- Top Header Badge -->
      <g transform="translate(60, 42)">
        <rect x="0" y="0" width="410" height="28" rx="14" fill="rgba(99, 102, 241, 0.12)" stroke="rgba(129, 140, 248, 0.3)" stroke-width="1" />
        <circle cx="16" cy="14" r="4" fill="#818CF8" />
        <text x="28" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" letter-spacing="1.2" fill="#C7D2FE">VOTELY // ONLINE AWARDS &amp; VOTING PLATFORM</text>
      </g>
    </svg>
  `);

  // Resize Organizer Dashboard for Left Layer (800 x 394)
  const dashboardCard = await sharp(path.join(srcDir, 'media_1794554425939_28dd4ee1.jpg'))
    .resize(800, 394, { fit: 'cover' })
    .toBuffer();

  // Resize Vote Success Modal for Right Overlap Layer (380 x 484)
  const modalCard = await sharp(path.join(srcDir, 'media_1794554489001_4225e001.png'))
    .resize(380, 484, { fit: 'cover' })
    .toBuffer();

  // Create rounded corner / border frames for both with SVGs
  const dashboardFrame = Buffer.from(`
    <svg width="802" height="422" viewBox="0 0 802 422" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.8" />
        </filter>
      </defs>
      <!-- Browser window header -->
      <rect x="1" y="1" width="800" height="420" rx="12" fill="#0E101E" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" filter="url(#shadow1)" />
      <g transform="translate(16, 12)">
        <circle cx="0" cy="0" r="4.5" fill="#EF4444" opacity="0.8" />
        <circle cx="14" cy="0" r="4.5" fill="#F59E0B" opacity="0.8" />
        <circle cx="28" cy="0" r="4.5" fill="#10B981" opacity="0.8" />
        <text x="48" y="4" font-family="monospace" font-size="10.5" fill="#64748B">votely.app/organizer/dashboard</text>
      </g>
    </svg>
  `);

  const modalFrame = Buffer.from(`
    <svg width="382" height="486" viewBox="0 0 382 486" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow2" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="20" stdDeviation="30" flood-color="#000000" flood-opacity="0.9" />
          <feDropShadow dx="0" dy="0" stdDeviation="20" flood-color="#6366F1" flood-opacity="0.25" />
        </filter>
      </defs>
      <rect x="1" y="1" width="380" height="484" rx="16" fill="none" stroke="rgba(129, 140, 248, 0.45)" stroke-width="1.5" filter="url(#shadow2)" />
    </svg>
  `);

  // Build composite
  const baseImg = sharp(bgSvg);

  const compositeImg = await baseImg.composite([
    // Organizer dashboard card + header
    { input: dashboardFrame, top: 110, left: 60 },
    { input: dashboardCard, top: 136, left: 61 },
    // Foreground modal card with glow
    { input: modalCard, top: 100, left: 760 },
    { input: modalFrame, top: 100, left: 760 },
  ])
  .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
  .toBuffer();

  // Save to both public and src/assets
  fs.writeFileSync(path.join(outDir, 'cover.jpg'), compositeImg);
  fs.writeFileSync(path.join(outDir, 'votely-cover.jpg'), compositeImg);
  fs.writeFileSync(path.join(assetsDir, 'votely-cover.jpg'), compositeImg);

  console.log('3. All Votely assets and covers generated successfully!');
}

run().catch(console.error);
