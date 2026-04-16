import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Font,
} from "@react-pdf/renderer";

Font.registerHyphenationCallback(w => [w]);
import {
  personalInfo,
  about,
  experiences,
  skillCategories,
  careerHighlights,
} from "../../shared/data/cv";

const PURPLE = "#7c3aed";
const NAVY = "#0f0f2e";
const GRAY = "#6b7280";
const LIGHT_GRAY = "#f3f4f6";
const BORDER = "#e5e7eb";

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
    marginBottom: 22,
    paddingBottom: 18,
    borderBottomWidth: 2,
    borderBottomColor: PURPLE,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    color: NAVY,
    letterSpacing: -0.5,
    marginBottom: 3,
  },
  titleRow: {
    fontSize: 11,
    color: PURPLE,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
  },
  location: {
    fontSize: 8.5,
    color: GRAY,
  },
  contactCol: {
    alignItems: "flex-end",
    gap: 4,
  },
  contactItem: {
    fontSize: 8.5,
    color: GRAY,
  },
  contactLink: {
    fontSize: 8.5,
    color: PURPLE,
    textDecoration: "none",
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
    marginBottom: 12,
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
  expDesc: {
    fontSize: 8.5,
    color: "#4b5563",
    lineHeight: 1.5,
    marginBottom: 5,
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

  // Skills
  skillsGrid: {
    flexDirection: "row",
    gap: 16,
  },
  skillCol: {
    flex: 1,
  },
  skillCategory: {
    marginBottom: 10,
  },
  skillCatTitle: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: NAVY,
    marginBottom: 4,
  },
  skillsList: {
    fontSize: 8,
    color: "#4b5563",
    lineHeight: 1.6,
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

  // Highlights
  highlightsGrid: {
    flexDirection: "row",
    gap: 10,
  },
  highlightCard: {
    flex: 1,
    borderLeftWidth: 2,
    borderLeftColor: BORDER,
    paddingLeft: 8,
  },
  highlightLabel: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: GRAY,
    marginBottom: 2,
  },
  highlightTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: NAVY,
    marginBottom: 5,
  },
  highlightPoint: {
    fontSize: 7.5,
    color: "#4b5563",
    lineHeight: 1.5,
    marginBottom: 2,
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

export const CvDocument = () => (
  <Document
    title={`${personalInfo.name} — CV`}
    author={personalInfo.name}
    subject="Frontend Engineer CV"
  >
    <Page size="A4" style={s.page}>

      {/* Header */}
      <View style={s.header}>
        <View>
          <Text style={s.name}>{personalInfo.name}</Text>
          <Text style={s.titleRow}>{personalInfo.title} · Team & Tech Lead</Text>
          <Text style={s.location}>{personalInfo.location} · {personalInfo.yearsOfExperience} years experience</Text>
        </View>
        <View style={s.contactCol}>
          <Link src={`mailto:${personalInfo.email}`} style={s.contactLink}>
            {personalInfo.email}
          </Link>
          <Text style={s.contactItem}>{personalInfo.phone}</Text>
          <Link src={personalInfo.linkedin} style={s.contactLink}>
            linkedin.com/in/kryvenkosergiy
          </Link>
        </View>
      </View>

      {/* About */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Profile</Text>
        {about.map((para, i) => (
          <Text key={i} style={s.aboutText}>{para}</Text>
        ))}
      </View>

      {/* Skills */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Skills</Text>
        <View style={s.skillsGrid}>
          <View style={s.skillCol}>
            {skillCategories.filter((_, i) => i % 2 === 0).map(cat => (
              <View key={cat.category} style={s.skillCategory}>
                <Text style={s.skillCatTitle}>{cat.category}</Text>
                <Text style={s.skillsList}>{cat.skills.join(", ")}</Text>
              </View>
            ))}
          </View>
          <View style={s.skillCol}>
            {skillCategories.filter((_, i) => i % 2 !== 0).map(cat => (
              <View key={cat.category} style={s.skillCategory}>
                <Text style={s.skillCatTitle}>{cat.category}</Text>
                <Text style={s.skillsList}>{cat.skills.join(", ")}</Text>
              </View>
            ))}
          </View>
        </View>
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
              <Text style={s.expDates}>{exp.startDate} – {exp.endDate}</Text>
            </View>
            <Text style={s.expCompany}>
              {exp.company}{exp.client ? ` — ${exp.client}` : ""}
            </Text>
            <Text style={s.expDesc}>{exp.description}</Text>
            <View style={s.techRow}>
              {exp.technologies.map(t => (
                <Text key={t} style={s.techBadge}>{t}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Career Highlights */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Lead Highlights</Text>
        <View style={s.highlightsGrid}>
          {careerHighlights.map((item, i) => (
            <View
              key={item.title}
              style={[
                s.highlightCard,
                { borderLeftColor: ["#7c3aed", "#3b82f6", "#ec4899"][i] },
              ]}
            >
              <Text style={[s.highlightLabel, { color: ["#7c3aed", "#3b82f6", "#ec4899"][i] }]}>
                {item.label}
              </Text>
              <Text style={s.highlightTitle}>{item.title}</Text>
              {item.points.map((point, j) => (
                <Text key={j} style={s.highlightPoint}>{"• "}{point}</Text>
              ))}
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={s.footer} fixed>
        <Text style={s.footerText}>{personalInfo.name} · Frontend Engineer</Text>
        <Text style={s.footerText}>{personalInfo.email}</Text>
      </View>

    </Page>
  </Document>
);
