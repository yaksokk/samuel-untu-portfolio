import { GitHubCalendar } from "react-github-calendar";
import { FiGithub, FiGitCommit, FiExternalLink } from "react-icons/fi";

const GITHUB_USERNAME = "yaksokk";

const calendarTheme = {
    dark: [
        "#111111",
        "#0d2040",
        "#1a3a6e",
        "#1e6abf",
        "#1e90ff",
    ],
};

function GitHubActivity() {
    return (
        <section id="github-activity" className="relative py-24 px-6 md:px-12 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-primary-glow-dark border border-primary-dark/20 text-xs font-semibold tracking-wider uppercase text-primary-dark">
                        <FiGitCommit size={12} />
                        Coding Activity
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
                        GitHub{" "}
                        <span className="text-gradient">Contributions</span>
                    </h2>
                    <p className="mt-3 text-text-muted-dark max-w-md text-sm md:text-base leading-relaxed">
                        A snapshot of my open source and personal project activity over the past year.
                    </p>
                </div>

                {/* Calendar Card */}
                <div className="glass rounded-2xl p-6 md:p-8 glow-blue mb-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 text-text-muted-dark text-sm">
                            <FiGithub size={16} className="text-primary-dark" />
                            <span className="font-medium text-text-dark">@{GITHUB_USERNAME}</span>
                        </div>
                        <a
                            href={`https://github.com/${GITHUB_USERNAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-text-subtle-dark hover:text-primary-dark transition-colors duration-300"
                        >
                            View Profile
                            <FiExternalLink size={12} />
                        </a>
                    </div>

                    {/* Force SVG to be fully responsive */}
                    <div className="w-full [&>svg]:w-full [&>svg]:h-auto">
                        <GitHubCalendar
                            username={GITHUB_USERNAME}
                            theme={calendarTheme}
                            colorScheme="dark"
                            blockSize={14}
                            blockMargin={4}
                            blockRadius={3}
                            fontSize={12}
                            labels={{
                                totalCount: "{{count}} contributions in the last year",
                            }}
                            style={{
                                color: "#a0aec0",
                                fontFamily: "Poppins, sans-serif",
                            }}
                        />
                    </div>
                </div>

                {/* Profile Card - clickable */}
                <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-elevated-dark border border-border-dark hover:border-primary-dark hover:bg-primary-glow-dark transition-all duration-300 group w-fit"
                >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-glow-dark group-hover:bg-primary-dark/20 transition-colors duration-300">
                        <FiExternalLink size={15} className="text-primary-dark" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-text-dark group-hover:text-primary-dark transition-colors duration-300">
                            github.com/{GITHUB_USERNAME}
                        </p>
                        <p className="text-xs text-text-subtle-dark">Profile</p>
                    </div>
                </a>

                {/* Note */}
                <p className="mt-5 text-xs text-text-subtle-dark text-center">
                    * Some contributions may be from private repositories and not reflected here.
                </p>
            </div>
        </section>
    );
}

export default GitHubActivity;