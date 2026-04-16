import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Font,
  Svg,
  Path,
  Circle,
} from "@react-pdf/renderer";

Font.registerHyphenationCallback(w => [w]);
import {
  personalInfo,
  about,
  experiences,
  skillCategories,
  education,
} from "../../shared/data/cv";

const PURPLE = "#7c3aed";
const NAVY = "#0f0f2e";
const GRAY = "#6b7280";
const LIGHT_GRAY = "#f3f4f6";
const BORDER = "#e5e7eb";

const IconMail = () => (
  <Svg width={10} height={10} viewBox="0 0 24 24">
    <Path
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      fill="none"
      stroke={PURPLE}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const IconPhone = () => (
  <Svg width={10} height={10} viewBox="0 0 24 24">
    <Path
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      fill="none"
      stroke={PURPLE}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const IconLinkedIn = () => (
  <Svg width={10} height={10} viewBox="0 0 24 24">
    <Path
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      fill={PURPLE}
    />
  </Svg>
);

const IconGitHub = () => (
  <Svg width={10} height={10} viewBox="0 0 24 24">
    <Path
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      fill={PURPLE}
    />
  </Svg>
);

const IconUpwork = () => (
  <Svg width={10} height={10} viewBox="0 0 24 24">
    <Path
      d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.295 5.281 5.295 2.913 0 5.283-2.378 5.283-5.295v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
      fill={PURPLE}
    />
  </Svg>
);

const IconGlobe = () => (
  <Svg width={10} height={10} viewBox="0 0 24 24">
    <Circle cx="12" cy="12" r="10" fill="none" stroke={PURPLE} strokeWidth="1.8" />
    <Path
      d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
      fill="none"
      stroke={PURPLE}
      strokeWidth="1.4"
    />
  </Svg>
);

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
    paddingHorizontal: 44,
    paddingVertical: 40,
    fontSize: 9,
    color: "#1f2937",
  },

  // Header
  header: {
    marginBottom: 20,
    paddingBottom: 14,
    borderBottomWidth: 2,
    borderBottomColor: PURPLE,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: NAVY,
    letterSpacing: -0.5,
    marginBottom: 2,
  },
  titleRow: {
    fontSize: 10,
    color: PURPLE,
    fontFamily: "Helvetica-Bold",
  },
  headerLinks: {
    alignItems: "flex-end",
    gap: 6,
    paddingTop: 4,
  },
  headerLinkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  headerLink: {
    fontSize: 8,
    color: PURPLE,
    textDecoration: "underline",
  },

  // Section
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: PURPLE,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: BORDER,
  },

  // About
  aboutText: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.6,
    marginBottom: 5,
  },

  // Experience
  expItem: {
    marginBottom: 15,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: LIGHT_GRAY,
  },
  expItemCurrent: {
    borderLeftColor: PURPLE,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  expRole: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: NAVY,
  },
  expDates: {
    fontSize: 8,
    color: GRAY,
  },
  expCompany: {
    fontSize: 9,
    color: PURPLE,
    fontFamily: "Helvetica-Bold",
    marginBottom: 1,
  },
  expClient: {
    fontSize: 8,
    color: GRAY,
    marginBottom: 4,
  },
  expBulletRow: {
    flexDirection: "row" as const,
    marginBottom: 2,
  },
  expBulletDot: {
    fontSize: 8.5,
    color: PURPLE,
    width: 10,
  },
  expBulletText: {
    fontSize: 8.5,
    color: "#4b5563",
    lineHeight: 1.5,
    flex: 1,
  },
  techRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  techBadge: {
    fontSize: 7,
    color: PURPLE,
    backgroundColor: "#ede9fe",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 3,
    marginBottom: 3,
  },

  // Skills (flat ATS-friendly layout)
  skillFlatRow: {
    flexDirection: "row",
    marginBottom: 5,
    flexWrap: "wrap",
  },
  skillFlatCat: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: NAVY,
  },
  skillFlatList: {
    fontSize: 8.5,
    color: "#4b5563",
    flex: 1,
    flexWrap: "wrap",
  },

  // Education
  eduRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  eduDegree: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: NAVY,
    marginBottom: 2,
  },
  eduField: {
    fontSize: 8.5,
    color: GRAY,
    marginBottom: 2,
  },
  eduUniversity: {
    fontSize: 9,
    color: PURPLE,
    fontFamily: "Helvetica-Bold",
  },
  eduPeriod: {
    fontSize: 8,
    color: GRAY,
  },

  // Stats
  statsRow: {
    flexDirection: "row",
    marginBottom: 18,
    paddingBottom: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: BORDER,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 15,
    fontFamily: "Helvetica-Bold",
    color: PURPLE,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 7,
    color: GRAY,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },

  // Contact section
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    flex: 1,
  },
  contactEntryLabel: {
    fontSize: 6.5,
    color: GRAY,
    textTransform: "uppercase",
    letterSpacing: 0.7,
    marginBottom: 1,
  },
  contactEntryLink: {
    fontSize: 8.5,
    color: PURPLE,
    textDecoration: "underline",
  },
  contactEntryValue: {
    fontSize: 8.5,
    color: "#374151",
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 24,
    left: 44,
    right: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: BORDER,
    paddingTop: 8,
  },
  footerText: {
    fontSize: 7.5,
    color: "#9ca3af",
  },
});

const contactItems = [
  { icon: <IconMail />,     label: "Email",     value: personalInfo.email,                href: `mailto:${personalInfo.email}` },
  { icon: <IconPhone />,    label: "Phone",     value: personalInfo.phone },
  { icon: <IconLinkedIn />, label: "LinkedIn",  value: personalInfo.linkedinDisplay,        href: personalInfo.linkedin },
  { icon: <IconGitHub />,   label: "GitHub",    value: personalInfo.githubDisplay,          href: personalInfo.github },
  { icon: <IconUpwork />,   label: "Upwork",    value: personalInfo.upworkDisplay,          href: personalInfo.upwork },
  { icon: <IconGlobe />,    label: "Portfolio", value: personalInfo.portfolioDisplay,       href: personalInfo.portfolio },
];

export const CvDocument = () => (
  <Document
    title={`${personalInfo.name} — CV`}
    author={personalInfo.name}
    subject='Senior Frontend Engineer CV'
  >
    <Page size='A4' style={s.page}>
      {/* Header */}
      <View style={s.header}>
        <View>
          <Text style={s.name}>{personalInfo.name}</Text>
          <Text style={s.titleRow}>
            {personalInfo.title} · Team & Tech Lead · {personalInfo.location}
          </Text>
        </View>
        <View style={s.headerLinks}>
          <View style={s.headerLinkRow}>
            <IconMail />
            <Link src={`mailto:${personalInfo.email}`} style={s.headerLink}>{personalInfo.email}</Link>
          </View>
          <View style={s.headerLinkRow}>
            <IconLinkedIn />
            <Link src={personalInfo.linkedin} style={s.headerLink}>{personalInfo.linkedinDisplay}</Link>
          </View>
          <View style={s.headerLinkRow}>
            <IconGlobe />
            <Link src={personalInfo.portfolio} style={s.headerLink}>{personalInfo.portfolioDisplay}</Link>
          </View>
        </View>
      </View>

      {/* About */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Professional Summary</Text>
        {about.map((para, i) => (
          <Text key={i} style={s.aboutText}>
            {para}
          </Text>
        ))}
      </View>

      {/* Experience */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Experience</Text>
        {experiences.map(exp => (
          <View
            key={exp.id}
            style={[s.expItem, exp.current ? s.expItemCurrent : {}]}
            wrap={false}
          >
            <View style={s.expHeader}>
              <Text style={s.expRole}>{exp.role}</Text>
              <Text style={s.expDates}>
                {exp.startDate} - {exp.endDate}
              </Text>
            </View>
            <Text style={s.expCompany}>
              {exp.company}
              {exp.client ? ` | ${exp.client}` : ""}
            </Text>
            <View style={{ marginBottom: 4 }}>
              {exp.description.map((point, i) => (
                <View key={i} style={s.expBulletRow}>
                  <Text style={s.expBulletDot}>•</Text>
                  <Text style={s.expBulletText}>{point}</Text>
                </View>
              ))}
            </View>
            <View>
              <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: GRAY, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 }}>Technologies</Text>
              <View style={s.techRow}>
                {exp.technologies.map(t => (
                  <Text key={t} style={s.techBadge}>
                    {t}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Skills</Text>
        {skillCategories.map(cat => (
          <View key={cat.category} style={s.skillFlatRow}>
            <Text style={s.skillFlatCat}>{cat.category}: </Text>
            <Text style={s.skillFlatList}>{cat.skills.join(", ")}</Text>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Education</Text>
        <View style={s.eduRow}>
          <View>
            <Text style={s.eduDegree}>{education.degree}</Text>
            <Text style={s.eduField}>{education.field}</Text>
            <Text style={s.eduUniversity}>{education.university}</Text>
          </View>
          <Text style={s.eduPeriod}>{education.period}</Text>
        </View>
      </View>

      {/* Contact */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Contact</Text>
        <View style={{ flexDirection: "row", gap: 12, marginBottom: 10 }}>
          {contactItems.slice(0, 3).map(item => (
            <View key={item.label} style={s.contactItem}>
              {item.icon}
              <View>
                <Text style={s.contactEntryLabel}>{item.label}</Text>
                {item.href
                  ? <Link src={item.href} style={s.contactEntryLink}>{item.value}</Link>
                  : <Text style={s.contactEntryValue}>{item.value}</Text>
                }
              </View>
            </View>
          ))}
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          {contactItems.slice(3).map(item => (
            <View key={item.label} style={s.contactItem}>
              {item.icon}
              <View>
                <Text style={s.contactEntryLabel}>{item.label}</Text>
                {item.href
                  ? <Link src={item.href} style={s.contactEntryLink}>{item.value}</Link>
                  : <Text style={s.contactEntryValue}>{item.value}</Text>
                }
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={s.footer} fixed>
        <Text style={s.footerText}>
          {personalInfo.name} · {personalInfo.title}
        </Text>
        <Text style={s.footerText}>{personalInfo.email}</Text>
      </View>
    </Page>
  </Document>
);
