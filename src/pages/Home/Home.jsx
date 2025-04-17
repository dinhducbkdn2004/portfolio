import React from 'react';
import LinePattern from '../../components/patterns/LinePattern';
import AboutSection from '../../components/portfolio/about';
import ExperienceSection from '../../components/portfolio/experience';
import Footer from '../../components/portfolio/footer';
import OverviewSection from '../../components/portfolio/overview';
import PanelSection from '../../components/portfolio/panel';
import ProjectsSection from '../../components/portfolio/projects';
import TechStackSection from '../../components/portfolio/tech-stack';
import AnimatedSection from '../../components/AnimatedSection';
export default function Home() {
    return (
        <div className="relative min-h-screen w-full pb-8 overflow-x-hidden">
            <PanelSection />
            <AnimatedSection delay={100}>
                <LinePattern className="relative h-4" />
                <OverviewSection />
            </AnimatedSection>
            <AnimatedSection delay={200}>
                <LinePattern className="relative h-4" />
                <AboutSection />
            </AnimatedSection>
            <AnimatedSection delay={300}>
                <LinePattern className="relative h-4" />
                <TechStackSection />
            </AnimatedSection>
            <AnimatedSection delay={400}>
                <LinePattern className="relative h-4" />
                <ExperienceSection />
            </AnimatedSection>
            <AnimatedSection delay={500}>
                <LinePattern className="relative h-4" />
                <ProjectsSection />
            </AnimatedSection>
            <AnimatedSection delay={600}>
                <LinePattern className="relative h-4" />
                <Footer />
            </AnimatedSection>
        </div>
    );
}
