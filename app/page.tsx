export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-gray-900">
                  UnitAerospace
                </span>
                <span className="text-xs italic text-gray-600">
                  Components Detection & Analysis
                </span>
              </div>
            </div>
            <nav className="hidden items-center gap-6 sm:flex">
              <a
                href="#features"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                Request Demo
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  UnitAerospace
                </span>
                <span className="mt-1 text-sm italic text-gray-600 sm:text-base">
                  Components Detection & Analysis
                </span>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              QUALITY INSPECTOR TOOL to{" "}
              <span className="text-blue-600">DETECT & RESOLVE</span>{" "}
              <span className="text-red-600">&quot;ISSUES&quot;</span> in
              AEROSPACE COMPONENTS PAPERWORK
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              AI-powered 8130-3 analysis that automates compliance auditing,
              identifies discrepancies, and accelerates part release workflows
              for aerospace manufacturers and MRO facilities.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Request a demo
              </button>
              <button className="rounded-lg border-2 border-blue-600 px-8 py-3 text-base font-semibold text-blue-600 transition-all hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                View sample audit report
              </button>
            </div>
            <div className="mt-12 text-center">
              <p className="text-sm text-red-600 font-medium">
                Receiving & Final Inspection Issue Detection • 20-30% Issue Error Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Value Add
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Turnaround Time Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Turnaround Time
              </h3>
              <p className="mt-2 text-gray-600">
                Reduce paperwork review time from days to minutes with
                automated 8130-3 analysis and instant discrepancy detection.
              </p>
            </div>

            {/* Unlocking Quarantined Parts Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Unlocking Quarantined Parts
              </h3>
              <p className="mt-2 text-gray-600">
                Quickly identify and resolve compliance issues to release
                quarantined inventory and keep production lines moving.
              </p>
            </div>

            {/* Cost Savings Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <svg
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Cost Savings
              </h3>
              <p className="mt-2 text-gray-600">
                Eliminate manual review overhead and reduce compliance-related
                delays that impact operational efficiency and profitability.
              </p>
            </div>

            {/* Safety & Audit Approval Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Safety & Audit Approval
              </h3>
              <p className="mt-2 text-gray-600">
                Ensure regulatory compliance and maintain audit-ready
                documentation with comprehensive discrepancy tracking and
                resolution workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Three simple steps to transform your compliance workflow
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 sm:grid-cols-3">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                    1
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    Upload 8130-3 Documents
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Upload your 8130-3 tags and related paperwork through our
                    secure interface. Supports PDF, images, and scanned
                    documents.
                  </p>
                </div>
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-x-1/2 translate-y-8 bg-blue-200 sm:block" />
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                    2
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    AI Analysis & Detection
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Our AI engine automatically extracts data, validates
                    compliance requirements, and flags discrepancies in real-time
                    with detailed explanations.
                  </p>
                </div>
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-x-1/2 translate-y-8 bg-blue-200 sm:block" />
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                    3
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    Review & Resolve
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Access comprehensive audit reports with prioritized findings,
                    suggested resolutions, and export-ready documentation for
                    your compliance team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshots Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              See it in action
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Powerful features designed for aerospace compliance professionals
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-6xl space-y-12">
            {/* Document Review Screenshot */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">
                Document Review Interface
              </h3>
              <p className="mt-2 text-gray-600">
                Intuitive interface for reviewing 8130-3 tags with highlighted
                fields and instant validation feedback.
              </p>
              <div className="mt-6 flex h-64 items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
                <p className="text-gray-500">Document Review Screenshot</p>
              </div>
            </div>

            {/* 8130-3 Tag Analysis Screenshot */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">
                8130-3 Tag Analysis
              </h3>
              <p className="mt-2 text-gray-600">
                Automated extraction and validation of all required fields with
                compliance rule checking and discrepancy highlighting.
              </p>
              <div className="mt-6 flex h-64 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <p className="text-gray-500">8130-3 Analysis Screenshot</p>
              </div>
            </div>

            {/* Compliance Findings Screenshot */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">
                Compliance Findings Dashboard
              </h3>
              <p className="mt-2 text-gray-600">
                Comprehensive view of all compliance issues with severity
                ratings, resolution status, and audit trail tracking.
              </p>
              <div className="mt-6 flex h-64 items-center justify-center rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                <p className="text-gray-500">Compliance Findings Screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Compliance Audit Report Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sample Compliance Audit Report
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See what a comprehensive audit report looks like
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Audit Summary
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Generated: {new Date().toLocaleDateString()}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-red-50 p-4">
                    <div className="text-2xl font-bold text-red-600">12</div>
                    <div className="text-sm text-gray-600">Critical Issues</div>
                  </div>
                  <div className="rounded-lg bg-yellow-50 p-4">
                    <div className="text-2xl font-bold text-yellow-600">8</div>
                    <div className="text-sm text-gray-600">Warnings</div>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="text-2xl font-bold text-green-600">156</div>
                    <div className="text-sm text-gray-600">Valid Fields</div>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <h4 className="font-semibold text-gray-900">
                    Key Findings:
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">•</span>
                      Missing expiration date on 8130-3 tag #AER-2024-001
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">•</span>
                      Incomplete manufacturer information on tag #AER-2024-003
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-600">•</span>
                      Minor formatting inconsistencies detected in 3 documents
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <button className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                    Download Full Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Band */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">95%</div>
              <div className="mt-2 text-blue-100">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">10x</div>
              <div className="mt-2 text-blue-100">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="mt-2 text-blue-100">Aerospace Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">24/7</div>
              <div className="mt-2 text-blue-100">Automated Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA + Founder Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to transform your compliance workflow?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get in touch with our team to see how UnitAerospace can help your
              organization.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Request a demo
              </button>
              <button className="rounded-lg border-2 border-blue-600 px-8 py-3 text-base font-semibold text-blue-600 transition-all hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Founder Contact Card */}
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-10 w-10 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                  Lukas Buse
                </h3>
                <p className="mt-2 text-lg text-gray-600">Founder & CEO</p>
                <div className="mt-6 space-y-3">
                  <a
                    href="mailto:Lukasbuse@unit-aerospace.com"
                    className="block text-blue-600 hover:text-blue-700 hover:underline text-lg"
                  >
                    Lukasbuse@unit-aerospace.com
                  </a>
                  <a
                    href="tel:602-317-4421"
                    className="block text-gray-700 hover:text-blue-600 hover:underline text-lg"
                  >
                    602-317-4421
                  </a>
                  <p className="mt-4 text-gray-600">
                    Connect with Lukas to discuss how UnitAerospace can help
                    your organization streamline compliance workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                UnitAerospace
              </span>
              <span className="text-sm italic text-gray-600">
                Components Detection & Analysis
              </span>
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} UnitAerospace. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
