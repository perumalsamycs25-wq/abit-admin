INSERT INTO page_sections (page_id, section_type, content, status, display_order)
SELECT p.id, 'hero', '{"title":"Discover the world of possibility with ANUBOSE","description":"AnuBose Institute of Technology for Women''s strives to make students confident and creative builders of their future — Always Best In Technical-education.","buttonText":"Apply for Admissions","buttonUrl":"/admissions-2/","marqueeItems":["Admissions Open 2026","Sankranthi Celebrations","Discover the world of possibility with ANUBOSE!"]}'::jsonb, 'published', 0
FROM pages p WHERE p.slug = 'home'
  AND NOT EXISTS (SELECT 1 FROM page_sections s WHERE s.page_id = p.id AND s.section_type = 'hero');

INSERT INTO page_sections (page_id, section_type, content, status, display_order)
SELECT p.id, 'about', '{"imageUrl":"/ABIT_IMAGES/home-01-welcome-image-1-1.png","title":"A place where learning is maximized","paragraphs":["AnuBose Institute of Technology (ABIT), located at Paloncha — an industrial hub in Bhadradri Kothagudem district — is sponsored by the National Educational Trust, Paloncha. Established in 2008 with special attention to technical education.","ABIT expands itself as Always Best In Technical-education. We strive to make students confident and creative builders of their future, believing learning is maximized in an environment enriched with support."],"points":["Approved by AICTE, New Delhi","Affiliated to JNTU, Hyderabad","Sponsored by National Educational Trust, Paloncha"],"experienceText":"15+ Years"}'::jsonb, 'published', 1
FROM pages p WHERE p.slug = 'home'
  AND NOT EXISTS (SELECT 1 FROM page_sections s WHERE s.page_id = p.id AND s.section_type = 'about');

UPDATE page_sections
SET content = '{"imageUrl":"/ABIT_IMAGES/home-01-welcome-image-1-1.png","title":"A place where learning is maximized","paragraphs":["AnuBose Institute of Technology (ABIT), located at Paloncha — an industrial hub in Bhadradri Kothagudem district — is sponsored by the National Educational Trust, Paloncha. Established in 2008 with special attention to technical education.","ABIT expands itself as Always Best In Technical-education. We strive to make students confident and creative builders of their future, believing learning is maximized in an environment enriched with support."],"points":["Approved by AICTE, New Delhi","Affiliated to JNTU, Hyderabad","Sponsored by National Educational Trust, Paloncha"],"experienceText":"15+ Years"}'::jsonb,
    status = 'published', updated_at = now()
WHERE section_type = 'about' AND content = '{}'::jsonb;

INSERT INTO page_sections (page_id, section_type, content, status, display_order)
SELECT p.id, 'statistics', '[{"value":"2008","label":"Established"},{"value":"10+","label":"Departments"},{"value":"B++","label":"NAAC Grade"},{"value":"JNTUH","label":"Affiliated"}]'::jsonb, 'published', 2
FROM pages p WHERE p.slug = 'home'
  AND NOT EXISTS (SELECT 1 FROM page_sections s WHERE s.page_id = p.id AND s.section_type = 'statistics');

INSERT INTO page_sections (page_id, section_type, content, status, display_order)
SELECT p.id, 'cta', '{"imageUrl":"/ABIT_IMAGES/home-01-welcome-image-1-1.png","title":"Apply for Admissions","description":"We''re looking for future students who are inquisitive, passionate, original and determined to grow.","buttonText":"Apply for Admissions","buttonUrl":"/admissions-2/"}'::jsonb, 'published', 3
FROM pages p WHERE p.slug = 'home'
  AND NOT EXISTS (SELECT 1 FROM page_sections s WHERE s.page_id = p.id AND s.section_type = 'cta');

INSERT INTO page_sections (page_id, section_type, content, status, display_order)
SELECT p.id, 'newsEvents', '{"eyebrow":"Events & Updates","title":"News & Events","viewAllText":"View all","viewAllUrl":"/gallery/"}'::jsonb, 'published', 4
FROM pages p WHERE p.slug = 'home'
  AND NOT EXISTS (SELECT 1 FROM page_sections s WHERE s.page_id = p.id AND s.section_type = 'newsEvents');

INSERT INTO page_sections (page_id, section_type, content, status, display_order)
SELECT p.id, 'whyChooseSection', '{"eyebrow":"Why Choose AnuBose","title":"It begins with good academics","description":"ABIT begins with good academics and goes so much further from there.","buttonText":"Learn more"}'::jsonb, 'published', 5
FROM pages p WHERE p.slug = 'home'
  AND NOT EXISTS (SELECT 1 FROM page_sections s WHERE s.page_id = p.id AND s.section_type = 'whyChooseSection');

INSERT INTO page_sections (page_id, section_type, content, status, display_order)
SELECT p.id, 'pressSection', '{"eyebrow":"News coverage","title":"AnuBose in Press","description":"ABIT, It begins with good academics, and goes so much further from there."}'::jsonb, 'published', 6
FROM pages p WHERE p.slug = 'home'
  AND NOT EXISTS (SELECT 1 FROM page_sections s WHERE s.page_id = p.id AND s.section_type = 'pressSection');

INSERT INTO page_sections (page_id, section_type, content, status, display_order)
SELECT p.id, 'footer', '{"about":"AnuBose Institute of Technology for Women''s. Established 2008 — approved by AICTE, affiliated to JNTU Hyderabad and graded B++ by NAAC.","copyright":"© 2026 ABIT. All Rights Reserved.","tagline":"Always Best In Technical-education"}'::jsonb, 'published', 7
FROM pages p WHERE p.slug = 'home'
  AND NOT EXISTS (SELECT 1 FROM page_sections s WHERE s.page_id = p.id AND s.section_type = 'footer');

INSERT INTO content_items (resource, title, image_url, url, status, display_order, data)
SELECT 'banners', v.title, v.image_url, '/admissions-2/', 'published', v.display_order, '{"seed":"reference"}'::jsonb
FROM (VALUES
  ('Discover the world of possibility with ANUBOSE', '/ABIT_IMAGES/bannerp2.jpg', 0),
  ('Discover the world of possibility with ANUBOSE', '/ABIT_IMAGES/banner01.webp', 1),
  ('Discover the world of possibility with ANUBOSE', '/ABIT_IMAGES/BUILDING-2-Copy-1.jpg', 2)
) AS v(title, image_url, display_order)
WHERE NOT EXISTS (SELECT 1 FROM content_items WHERE resource = 'banners');

INSERT INTO content_items (resource, title, description, image_url, url, status, display_order, data)
SELECT 'admissions', v.title, v.description, v.image_url, '/admissions-2/', 'published', v.display_order, '{}'::jsonb
FROM (VALUES
  ('Admissions 2026-27', 'Admissions are now open.', '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.22-PM-1-200x300.jpeg', 0),
  ('B.Tech Admissions', 'Build your future at ABIT.', '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.20-PM-200x300.jpeg', 1),
  ('Engineering Admissions', 'Explore programmes at ABIT.', '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.21-PM-200x300.jpeg', 2)
) AS v(title, description, image_url, display_order)
WHERE NOT EXISTS (SELECT 1 FROM content_items WHERE resource = 'admissions');

INSERT INTO content_items (resource, title, description, image_url, url, status, display_order, data)
SELECT 'news-events', v.title, v.description, v.image_url, '#', 'published', v.display_order, jsonb_build_object('category', v.category)
FROM (VALUES
  ('Admissions', 'Admissions are now open. Explore programs and apply to join ABIT.', '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.22-PM-1-200x300.jpeg', 'Marquee', 0),
  ('Sankranthi Celebrations', 'The campus came alive with vibrant Sankranthi festivities.', '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.20-PM-200x300.jpeg', 'Campus Life', 1),
  ('Test News', 'Latest ABIT campus update.', '/ABIT_IMAGES/WhatsApp-Image-2026-01-27-at-11.57.18-AM-1-150x150.jpeg', 'News', 2)
) AS v(title, description, image_url, category, display_order)
WHERE NOT EXISTS (SELECT 1 FROM content_items WHERE resource = 'news-events');

INSERT INTO content_items (resource, title, description, status, display_order, data)
SELECT 'why-choose', v.title, v.description, 'published', v.display_order, '{}'::jsonb
FROM (VALUES
  ('Affordability', 'Our financial aid program makes ABIT affordable for every family.', 0),
  ('Academics', 'Our courses are taught by esteemed faculty members.', 1),
  ('Inspiring Student Life', 'Our residential system creates more opportunities for learning.', 2)
) AS v(title, description, display_order)
WHERE NOT EXISTS (SELECT 1 FROM content_items WHERE resource = 'why-choose');

INSERT INTO content_items (resource, title, image_url, status, display_order, data)
SELECT 'press', v.title, v.image_url, 'published', v.display_order, '{}'::jsonb
FROM (VALUES
  ('Press clipping 1', '/ABIT_IMAGES/Paper-Note-6.jpg', 0),
  ('Press clipping 2', '/ABIT_IMAGES/Paper-Note-14.jpg', 1),
  ('Press clipping 3', '/ABIT_IMAGES/Paper-Note-16-1.jpg', 2),
  ('Press clipping 4', '/ABIT_IMAGES/Paper-Note-24.jpg', 3),
  ('Press clipping 5', '/ABIT_IMAGES/Paper-Note-27.jpg', 4)
) AS v(title, image_url, display_order)
WHERE NOT EXISTS (SELECT 1 FROM content_items WHERE resource = 'press');

INSERT INTO content_items (resource, title, image_url, status, display_order, data)
SELECT 'recruiters', v.title, v.image_url, 'published', v.display_order, '{}'::jsonb
FROM (VALUES
  ('BYJU''S', '/ABIT_IMAGES/Byjus_logo.svg.png', 0), ('Atos', '/ABIT_IMAGES/Atos.s0vg.png', 1), ('Axelor', '/ABIT_IMAGES/axelor.png', 2), ('AGGNE', '/ABIT_IMAGES/AGGNE_LOGO-2.png', 3), ('AGP', '/ABIT_IMAGES/AGP.png', 4), ('Tech Mahindra', '/ABIT_IMAGES/texh-mahindra.png', 5), ('Virtusa', '/ABIT_IMAGES/virtusa.png', 6)
) AS v(title, image_url, display_order)
WHERE NOT EXISTS (SELECT 1 FROM content_items WHERE resource = 'recruiters');